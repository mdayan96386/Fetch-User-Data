const userContainer = document.getElementById('user-container');
    const reloadButton = document.getElementById('reload');

    async function fetchUsers() {
      try {
        const response = await fetch('https://randomuser.me/api/?results=10');
        const data = await response.json();
        displayUsers(data.results);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    }

    function displayUsers(users) {
      userContainer.innerHTML = '';
      users.forEach(user => {
        const userDiv = document.createElement('div');
        userDiv.classList.add('user');
        userDiv.innerHTML = `
          <img src="${user.picture.medium}" alt="Profile Picture">
          <h3>${user.name.first} ${user.name.last}</h3>
          <p>${user.email}</p>
        `;
        userContainer.appendChild(userDiv);
      });
    }

    fetchUsers();

    reloadButton.addEventListener('click', fetchUsers);