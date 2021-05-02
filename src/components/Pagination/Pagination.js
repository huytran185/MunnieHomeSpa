import React from 'react';
import './Pagination.css'

//Pagination Component

const Pagination = ({itemsPerPage, totalItems, paginate, currentPage}) => {
    const pageNumber = [];
    for(let i = 1; i <=Math.ceil(totalItems/itemsPerPage);i++){
        pageNumber.push(i);
    }

    return (
        <nav>
            <ul className="pagination">
                {pageNumber.map(number=>{
                    let display = null;
                    if(number === currentPage){
                        display = <li key={number} className="page-item active">
                                    <div onClick={()=>paginate(number)} className='page-link'>
                                        {number}
                                    </div>
                                </li>
                    }
                    else{ display =<li key={number} className="page-item">
                        <div onClick={()=>paginate(number)} className='page-link' >
                            {number}
                        </div>
                    </li>}
                    return display
                })}
            </ul>
        </nav>
    )
}

export default Pagination
