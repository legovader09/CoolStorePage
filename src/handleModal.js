const handleModal = (id) => {
    const modal = document.querySelector(`.modal[data-product="${id}"]`);
    console.log(id)
    if (modal.classList.contains('open')) {
        modal.classList.remove('open');
    } else {
        modal.classList.add('open');
    }
};
  
export default handleModal;