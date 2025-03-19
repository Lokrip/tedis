import {FC} from 'react';

import styles from './pagination.module.scss';
import Link from 'next/link';
import { MoveLeft, MoveRight } from 'lucide-react';
import ButtonSet from '@/widgets/ui/elements/button/ButtonSet';

interface PaginationProps {
    limit: number,
    currentPage: number,
    dataCount: number

}

const Pagination: FC<PaginationProps> = ({limit, currentPage, dataCount}) => {
    const totalPages = Math.ceil(dataCount / limit);
    const arrayPages = Array.from(Array(totalPages), (_, i) => i + 1)

    const hasMorePage = () => {
        const recievedDataCount = limit * currentPage
        return recievedDataCount < dataCount
    }

    return (
        <div className={styles.pagination}>
            <div className="pagination__container">
                <Link href={currentPage <= 2 ? "/" : `?page=${currentPage - 1}`}>
                    <ButtonSet buttonType="btnV4">
                        <MoveLeft />
                    </ButtonSet>
                </Link>
                {arrayPages.map((page) => (
                    <Link
                      key={page}
                      href={page === 1 ? "/" : `?page=${page}`}
                      className={page === currentPage ? "active" : ""}
                    >
                      {page}
                    </Link>
                ))}
                <Link href={hasMorePage() ? `?page=${currentPage + 1}` : `?page=${currentPage}`}>
                    <ButtonSet buttonType="btnV4">
                        <MoveRight />
                    </ButtonSet>
                </Link>
            </div>
        </div>
    );
};

export default Pagination;
