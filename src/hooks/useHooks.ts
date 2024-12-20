import rootActions from "@/redux/actions";
import { AppDispatch, RootState } from "@/redux/store";
import { bindActionCreators } from "@reduxjs/toolkit";
import { useMemo } from "react";
import { 
  TypedUseSelectorHook, 
  useDispatch, 
  useSelector 
} from "react-redux";


export const useAppDispath = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export const useActions = () => {
  const dispatch = useAppDispath()

  return useMemo(()=> {
    return bindActionCreators(
      rootActions,
      dispatch
    )
  }, [dispatch])
}