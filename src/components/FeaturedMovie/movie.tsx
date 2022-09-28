// Style Import
import './movie.css'

// Image Import
import imagePost from '../../assets/images/posts.jpg'
import imagePostTest from "../../assets/images/posts_test.jpg";
import {FaRegCalendarAlt} from "react-icons/fa";

// Construct
export function Movie() {

    return (
        <div className="content column__left">
            <figure>
                <img src={ imagePost } title="" alt=""/>
            </figure>

            <article className="grid__item">
                <a title="" href="" className="category">
                    Technology
                </a>

                <footer className="grid__infs">
                    <a title="" href="">
                        <img src={imagePostTest} title="" alt=""/>
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

        </div>
    )
}