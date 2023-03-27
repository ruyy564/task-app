import React from 'react';
import { Button, Pagination, Tabs, Tab } from '@mui/material';

import MyContainer from '../components/Container';
import Task from '../components/Task';
import useTaskPage from '../hooks/useTaskPage';
import FormTaskContainer from '../containers/FormTaskContainer';

function TaskPage({
  tasks,
  count,
  fetchTasks,
  deleteTask,
  updateTask,
  resetStatus,
  auth,
}) {
  const limit = 3;
  const {
    open,
    sortedBy,
    selectTask,
    changePage,
    changeSortedBy,
    changeDirectionSort,
    changeTask,
    openModal,
    closeModal,
  } = useTaskPage(fetchTasks, resetStatus, count, limit);

  return (
    <MyContainer>
      <Button variant="outlined" onClick={openModal}>
        Добавить
      </Button>
      {count > 0 && (
        <Tabs
          value={sortedBy}
          onChange={changeSortedBy}
          onClick={changeDirectionSort}
        >
          <Tab label="имя пользователя" />
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
          deleteTask={deleteTask}
        />
      ))}
      {count / limit >= 1 && (
        <Pagination
          count={Math.ceil(count / limit)}
          color="primary"
          showFirstButton
          showLastButton
          onChange={changePage}
        />
      )}
      <FormTaskContainer
        open={open}
        handleClose={closeModal}
        initState={selectTask}
      />
    </MyContainer>
  );
}

export default TaskPage;
