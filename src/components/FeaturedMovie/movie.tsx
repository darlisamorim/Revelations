// Style Import
import './movie.css'

// Image Import
// @ts-ignore
import imagePost from '../../assets/images/posts.jpg';
// @ts-ignore
import imagePostTest from '../../assets/images/posts_test.jpg';

// Import Icon
import {FaRegCalendarAlt} from "react-icons/fa";

// Construct
export function Movie() {

    return (
        <div className="content__flex column__left featured__movie">
            <figure className="column__figure">
                <img src={ imagePost } title="" alt=""/>
            </figure>

            {/*<div className="featured__highlight">*/}
                <article className="column__item">
                    <a title="" href="" className="category">
                        Technology
                    </a>

                    <footer className="grid__infs">
                        <a title="" href="">
                            <img src={ imagePostTest } title="" alt=""/>
                        </a>
                        <h2>
                            <a title="" href="">
                                Technology at dignissimos porta perspi desktop
                            </a>
                        </h2>
                        <span className="date">
                                <FaRegCalendarAlt />
                                September 18, 2022
                            </span>
                    </footer>
                </article>
                <article className="column__item">
                    <a title="" href="" className="category">
                        Technology
                    </a>

                    <footer className="grid__infs">
                        <a title="" href="">
                            <img src={ imagePostTest } title="" alt=""/>
                        </a>
                        <h2>
                            <a title="" href="">
                                Technology at dignissimos porta perspi desktop
                            </a>
                        </h2>
                        <span className="date">
                                    <FaRegCalendarAlt />
                                    September 18, 2022
                                </span>
                    </footer>
                </article>
            {/*</div>*/}
        </div>
    )
}