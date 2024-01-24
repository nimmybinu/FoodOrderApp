export function filterText(searchInput, restaurants) {
    return restaurants.filter((restaurant) =>
      restaurant?.info?.name?.toLowerCase().includes(searchInput.toLowerCase())
    );
  }