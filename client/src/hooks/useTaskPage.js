import { useState, useEffect } from 'react';

import useModals from './useModals';

const sort = ['name', 'email', 'text', 'isComplited', 'isUpdated'];

const useTaskPage = (fetchTasks, resetStatus, count, limit) => {
  const { open, handleClose, handleOpen } = useModals();
  const [page, setPage] = useState(1);
  const [sortedBy, setSortedBy] = useState(0);
  const [increasing, setIncreasing] = useState(true);
  const [selectTask, setSelectTask] = useState(null);

  useEffect(() => {
    fetchTasks(page, limit, sort[sortedBy], increasing ? 'ASC' : 'DESC');
  }, [increasing, fetchTasks, page, sortedBy, count, limit]);

  const changePage = (_, page) => {
    setPage(page);
  };

  const changeSortedBy = (_, index) => {
    setSortedBy(index);
  };

  const changeDirectionSort = () => {
    setIncreasing((prev) => !prev);
  };

  const openModal = () => {
    handleOpen();
    resetStatus();
  };

  const changeTask = (task) => {
    setSelectTask(task);
    openModal();
  };

  const closeModal = () => {
    handleClose();
    setSelectTask(null);
  };

  return {
    open,
    page,
    sortedBy,
    increasing,
    selectTask,
    changePage,
    changeSortedBy,
    changeDirectionSort,
    changeTask,
    openModal,
    closeModal,
  };
};

export default useTaskPage;
