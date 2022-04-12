import React, { useState } from 'react';
import WinnersItems from './WinnersItems';
import './Winners.css'

const Winners2021 = () =>{

    const [Items, setItems] = useState(WinnersItems);

    return(
        <>
            <div className='Winners2021Scn'>
                <div class="row">
                    <div class="col-12">
                        <h3>2021 Winners</h3>
                    </div>
                </div>

                <div class="tableDv">
                    <table class="table" callspacing="0" callpadding="0" border="0" width="100%">
                        <thead>
                            <tr>
                                <th>Category</th>
                                <th>Awardees</th>
                                <th>Project</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                Items.map((item, i) =>{
                                    return(
                                        <>
                                            <tr>
                                                <td data-th="Category">{item.Category}</td>
                                                <td data-th="Awardees">{item.Awardees}</td>
                                                <td data-th="Project">{item.Project}</td>
                                            </tr>
                                        </>
                                    )
                                })
                            }

                        </tbody>
                    </table>
                </div>
                
                
                <div class="row text-center">
                    <div class="col-12">
                        <div class="btn_blk">
                            <a href="https://geospatialworldforum.org/previous-winners.html">Previous Winners</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Winners2021;