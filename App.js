document.getElementById('sessionForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const sessionId = document.getElementById('sessionId').value;
    alert('SESSION_ID: ' + sessionId);
});
