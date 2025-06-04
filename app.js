const faqButtons = document.querySelectorAll('.faq-question');

faqButtons.forEach(button => {
    button.addEventListener('click', () => {
      const expanded = button.getAttribute('aria-expanded') === 'true';
      const answer = button.nextElementSibling;
      const icon = button.querySelector('.icon');

      document.querySelectorAll('.faq-answer').forEach(el => el.hidden = true);
      document.querySelectorAll('.faq-question').forEach(btn => {
        btn.setAttribute('aria-expanded', 'false');
        btn.querySelector('.icon').src = './assets/images/icon-plus.svg';
      });

      if (!expanded) {
        answer.hidden = false;
        button.setAttribute('aria-expanded', 'true');
        icon.src = './assets/images/icon-minus.svg';
      }
    });
  });