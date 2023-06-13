function showContent() {
    document.getElementById('login-form').reset();
    document.getElementById('login-form').classList.add('hide');
    document.getElementById('login-success-message').classList.remove('hide');
    document.getElementById('todo-list').classList.remove('hide');
    document.getElementById('user-table').classList.remove('hide');
    document.getElementById('admin-table').classList.remove('hide');
}