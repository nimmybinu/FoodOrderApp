import { FETCH_IMAGE_URL } from "../Constants";
const useRestaurant = (id) => {
  const [menuDetails, setMenuDetails] = useState(null);
  const [menuItems, setMenuItems] = useState(null);

  // get data api call 
  useEffect(() => {
    getMenuDetails();
  }, []);

  async function getMenuDetails() {
    try {
      const data = await fetch(FETCH_IMAGE_URL + id);
      const json = await data.json();
      console.log(json);

      setMenuDetails(json?.data?.cards[0]?.card?.card?.info);
      setMenuItems(
        json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card
          ?.card?.itemCards
      );
    } catch (error) {
      console.log(error);
    }
  }
  //return data
  return {
    menuDetails,
    menuItems,
  };
};
export default useRestaurant;
