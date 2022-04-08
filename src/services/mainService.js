import http from ".";

/**
 * 	Get
 */

const getUsers = () => http.get(`/users`);

const getUserById = (id) => http.get(`/users/${id}`);

const mainService = { getUsers, getUserById };

export default mainService;
