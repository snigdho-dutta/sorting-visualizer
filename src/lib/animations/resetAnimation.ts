export default function resetAnimation() {
  const contentContainer = document.getElementById('content-container')
  if (contentContainer) {
    contentContainer.classList.remove('border')
    contentContainer.classList.add('border')
  }
}
