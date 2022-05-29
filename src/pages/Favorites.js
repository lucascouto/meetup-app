import { useContext } from "react";
import MeetupList from "../components/meetups/MeetupList";
import FavoritesContext from "../store/favorites-context";

function FavoritesPage() {
  const favoritesContext = useContext(FavoritesContext);
  const favorites = favoritesContext.favorites;

  return <MeetupList meetups={favorites} />;
}

export default FavoritesPage;
