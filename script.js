function animateImages() {
  const imageWrappers = document.querySelectorAll('.image-wrapper img');
  const wrapperWidth = imageWrappers[0].clientWidth; // ความกว้างของ wrapper

  imageWrappers.forEach((wrapper, index) => {
    setTimeout(() => {
      wrapper.style.opacity = '1';
      wrapper.style.transform = 'translateX(0)'; // เปลี่ยนเป็น translateX
      wrapper.style.left = `${index * wrapperWidth}px`; // ปรับ right ตามตำแหน่งของ wrapper
    }, index * 50);
  });
}




