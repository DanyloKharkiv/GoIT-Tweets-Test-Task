const selectUsers = state => state.users.all;

const selectFollowing = state => state.users.following;

const selectUsersIsLoading = state => state.users.isLoading;

const selectUsersError = state => state.users.error;

export { selectUsers, selectFollowing, selectUsersIsLoading, selectUsersError };
