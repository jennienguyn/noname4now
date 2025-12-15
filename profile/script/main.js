document.querySelectorAll('.discord').forEach(div => {
  const tooltip = div.querySelector('.mescopy');
  const textToCopy = div.dataset.copy;

  div.addEventListener('click', () => {
    navigator.clipboard.writeText(textToCopy).then(() => {
      tooltip.textContent = "Copied!";
      setTimeout(() => {
        tooltip.textContent = "Copy Discord";
      }, 1500);
    });
  });
});

(function() {
    const displayName = "noname4now";
    let index = 0;
    let forward = true;

    setInterval(() => {
        if (forward) {
            index++;
            if (index >= displayName.length) forward = false;
        } else {
            index--;
            if (index <= 0) forward = true;
        }

        const currentText = displayName.slice(0, index);
        document.title = "@" + currentText;
    }, 300);
})();