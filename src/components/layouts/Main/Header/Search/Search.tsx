"use client"
import Form from "../../../../ui/form/Form";
import styles from "./search.module.scss"
import { ChangeEvent, FormEvent, useCallback } from "react";
import Field from "../../../../ui/form/fields/Field";

import { useActions, useAppSelector, useDebounce } from "../../../../../hooks";
import { useRouter } from 'next/navigation'


export default function Search(): JSX.Element {
    const router = useRouter()

    const {saveDataInSearch} = useActions()
    const {search} = useAppSelector(state => state.searchReduser)

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
            <Field onChange={onChange} type="text" placeholder="Search..." />
            <div className="button-container__search">
                <button type="submit">Отправить</button>
            </div>
            
        </Form>
    )
}