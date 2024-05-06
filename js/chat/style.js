const messageContent = document.querySelector('.message .content');
const message = document.querySelector('.message');

messageContent.addEventListener('input', function() {
    const lineHeight = parseInt(window.getComputedStyle(this).lineHeight);
    const lines = Math.ceil(this.scrollHeight / lineHeight);

    if (lines > 5) {
        message.classList.add('expanded');
    } else {
        message.classList.remove('expanded');
    }
});
