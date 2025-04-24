document.addEventListener('DOMContentLoaded', function () {
    const dropdownMenus = document.querySelectorAll('.dropdown-menu');
  
    dropdownMenus.forEach(menu => {
      const dropdownItems = menu.querySelectorAll('.dropdown-item');
      const toggle = menu.closest('.dropdown').querySelector('.dropdown-toggle');
  
      function setTabIndexForItems(enable) {
        dropdownItems.forEach(item => {
          item.tabIndex = enable ? 0 : -1;
        });
      }
  
      // Initially disable tabbing into hidden menu items
      setTabIndexForItems(false);
  
      toggle.addEventListener('show.bs.dropdown', function () {
        setTabIndexForItems(true);
      });
  
      toggle.addEventListener('hide.bs.dropdown', function () {
        setTabIndexForItems(false);
      });
    });
  });