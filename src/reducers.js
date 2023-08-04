import {
  FAV_ADD,
  FAV_REMOVE,
  FETCH_SUCCESS,
  FETCH_LOADING,
  FETCH_ERROR,
  GET_FAVS_FROM_LS,
} from "./actions";

import { toast } from "react-toastify";
let apiStatus = null;

const initial = {
  favs: [],
  current: null,
  error: null,
  loading: true,
};

function writeFavsToLocalStorage(state) {
  localStorage.setItem("s10g4", JSON.stringify(state.favs));
}

function readFavsFromLocalStorage() {
  return JSON.parse(localStorage.getItem("s10g4"));
}

export function myReducer(state = initial, action) {
  switch (action.type) {
    case FAV_ADD:
      return state;

    case FAV_REMOVE:
      return state;

    case FETCH_SUCCESS:
      // böyle bir toastify oluşturma şekli de var, ilk dört satırı belirledik flan, bunu yaptım çünkü açılışta direkt olarak api yi gösteriyor bana böyle olduğunda.

      toast.update(apiStatus, {
        render: "✅okey, process done honey 🐷",
        isLoading: false,
        position: "top-left",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return { ...state, current: action.payload, loading: false };

    case FETCH_LOADING:
      apiStatus = toast.loading("E Loading be Sugar...🔅", {
        position: "top-left",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return { ...state, loading: true, error: null, current: null };

    case FETCH_ERROR:
      apiStatus = toast.error("🦄 Wow there's a mistake", {
        position: "top-left",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return { ...state, error: action.payload, loading: false };

    case GET_FAVS_FROM_LS:
      return state;

    default:
      return state;
  }
}
