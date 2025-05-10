function unlock() {
  const code = document.getElementById('code').value;
  if (code === '021025') {
    document.getElementById('lock').style.display = 'none';
    document.getElementById('content').style.display = 'block';
  } else {
    document.getElementById('error').style.display = 'block';
  }
}

function openEnvelope() {
  document.getElementById('mail').style.display = 'block';
}