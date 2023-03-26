import React, { useState, useEffect } from 'react';
import { Button, Pagination, Tabs, Tab } from '@mui/material';

import MyContainer from '../components/Container';
import Task from '../components/Task';
import useModals from '../hooks/useModals';
import FormTaskContainer from '../containers/FormTaskContainer';

const sort = ['name', 'email', 'text', 'isComplited', 'isUpdated'];

function TaskPage({
  tasks,
  count,
  fetchTasks,
  deleteTask,
  updateTask,
  resetStatus,
  auth,
}) {
  const { open, handleClose, handleOpen } = useModals();
  const [page, setPage] = useState(1);
  const [sortedBy, setSortedBy] = useState(0);
  const [increasing, setIncreasing] = useState(true);
  const [selectTask, setSelectTask] = useState(null);
  const limit = 3;

  useEffect(() => {
    fetchTasks(page, limit, sort[sortedBy], increasing ? 'ASC' : 'DESC');
  }, [increasing, fetchTasks, page, sortedBy, count]);

  const clickOnPageHandler = (_, page) => {
    setPage(page);
  };
  const clickSortHandler = (_, index) => {
    setSortedBy(index);
  };
  const clickHandler = () => {
    setIncreasing((prev) => !prev);
  };
  const changeTask = (task) => {
    setSelectTask(task);
    handleOpen();
  };

  const close = () => {
    handleClose();
    setSelectTask(null);
    resetStatus();
  };
  return (
    <MyContainer>
      <Button variant="outlined" onClick={handleOpen}>
        Добавить
      </Button>
      {count > 0 && (
        <Tabs
          value={sortedBy}
          onChange={clickSortHandler}
          onClick={clickHandler}
        >
          <Tab label="имя" />
          <Tab label="email" />
          <Tab label="текст" />
          <Tab label="завершена" />
          <Tab label="отредактирована" />
        </Tabs>
      )}
      {tasks?.map((task) => (
        <Task
          auth={auth}
          key={task.uuid}
          task={task}
          handleOpen={changeTask}
          updateTask={updateTask}
          deleteContact={() => deleteTask(task.uuid)}
        />
      ))}
      {count / limit >= 1 && (
        <Pagination
          count={Math.ceil(count / limit)}
          color="primary"
          showFirstButton
          showLastButton
          onChange={clickOnPageHandler}
        />
      )}
      <FormTaskContainer
        open={open}
        handleClose={close}
        initState={selectTask}
      />
    </MyContainer>
  );
}

export default TaskPage;
