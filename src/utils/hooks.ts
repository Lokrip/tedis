import rootActions from "@/redux/actions";
import { AppDispatch, RootState } from "@/redux/store";
import { bindActionCreators } from "@reduxjs/toolkit";
import { useCallback, useMemo, useRef } from "react";
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

export const useDebounce = (callback: (...args: any[]) => void, delay: number) => {
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const debouncedCallback = useCallback((...args: any[]) => {
    if (timer.current) {
      clearTimeout(timer.current)
    }

    timer.current = setTimeout(() => {
      callback(...args)
    }, delay)

  }, [callback, delay])

  return debouncedCallback
}
