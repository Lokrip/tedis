"use client"
import Form from "../../../../ui/form/Form";
import styles from "./search.module.scss"
import { ChangeEvent, FormEvent, useCallback, useEffect, useRef } from "react";

import { useActions, useAppSelector, useDebounce } from "../../../../../hooks";
import { useRouter } from 'next/navigation'
import SearchMenu from "./SearchMenu";
import SearchSystem from "./SearchSystem";
import pages from "@/service/route";



export default function Search(): JSX.Element {
    const router = useRouter()

    const { saveDataInSearch, openSearchMenu, closeSearchMenu } = useActions()
    const { search, isMenuOpen } = useAppSelector(state => state.searchReduser)

    const menuRef = useRef<HTMLFormElement | null>(null);

    const onSubmit = useCallback((event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();


        if(search) {
            const urlWithParams = pages.addSearchParam(pages.home,  {
                q: search
            })
            router.push(urlWithParams)
        } else {
            router.push(pages.home)
        }

    }, [router, search]);

    const handleChange = (value: any) => {
        saveDataInSearch(value)
    };

    const debouncedChange = useDebounce(handleChange, 500);

    const onChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        debouncedChange(event.target.value);
    }, [debouncedChange])

    const onClick = useCallback(() => {
        openSearchMenu();
    }, [openSearchMenu])


    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if(menuRef.current && !menuRef.current.contains(event.target as Node)) {
                closeSearchMenu();
            }
        }

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [])


    return (
        <Form ref={menuRef} className={styles.formSearch} onSubmit={onSubmit}>
            <SearchSystem onMouseDown={onClick} onChange={onChange} />
            {isMenuOpen && (<SearchMenu searchParam={search} />)}
        </Form>
    )
}
