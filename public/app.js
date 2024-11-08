document.addEventListener('alpine:init', () => {
    Alpine.data('productList', () => ({
      products: [],
      async fetchProducts() {
        const response = await fetch('/api/products');
        this.products = await response.json();
      },
    }));
  });
  