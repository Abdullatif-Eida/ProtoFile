$(document).ready(function() {
    document.querySelector('.img-btn').addEventListener('click', function()
	{
		document.querySelector('.cont').classList.toggle('s-signup')
	}
);
    });

togglePassword = document.querySelector('#togglePassword');
password = document.querySelector('#userPassword');
togglePassword.addEventListener('click', function (e) {
    // toggle the type attribute
    type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    // toggle the eye slash icon
    this.classList.toggle('fa-eye-slash');
});



togglePasswordup = document.querySelector('#togglePasswordup');
passwordup = document.querySelector('#userPasswordup');
togglePasswordup.addEventListener('click', function (e) {
    // toggle the type attribute
    typeup = passwordup.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordup.setAttribute('type', typeup);
    // toggle the eye slash icon
    this.classList.toggle('fa-eye-slash');
});