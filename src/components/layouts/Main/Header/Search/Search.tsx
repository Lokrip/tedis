"use client"
import Form from "../../../../ui/form/Form";
import styles from "./search.module.scss"
import { ChangeEvent, FormEvent, useCallback } from "react";

import { useActions, useAppSelector, useDebounce } from "../../../../../hooks";
import { useRouter } from 'next/navigation'
import SearchMenu from "./SearchMenu";
import SearchSystem from "./SearchSystem";


export default function Search(): JSX.Element {
    const router = useRouter()

    const { saveDataInSearch } = useActions()
    const { search } = useAppSelector(state => state.searchReduser)

    const onSubmit = useCallback((event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if(search) {
            router.push(`/?q=${search}`)
        } else {
            router.push(`/`) 
        }

    }, [router, search]);

    const handleChange = (value: any) => {
        saveDataInSearch(value)
    }; 

    const debouncedChange = useDebounce(handleChange, 500);
    
    const onChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        debouncedChange(event.target.value)
    }, [debouncedChange])

    return (
        <Form className={styles.formSearch} onSubmit={onSubmit}>
            <SearchSystem onChange={onChange} />
            <SearchMenu searchParam={search} />
        </Form>
    )
}