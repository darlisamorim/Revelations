// Style Import
import './posts.css'

// Image Import
import imagePost from '../../assets/images/posts.jpg'
import imagePostTest from '../../assets/images/posts_test.jpg'

// Icon's Import
import { FaUserEdit, FaRegCalendarAlt, FaRegComments } from 'react-icons/fa';

// Construct
export function Posts() {

    return (
        <section className="posts container">
            <div className="content grid">
                <h1 className="fz">Titulo section H1</h1>

                <article className="grid__item">
                    <a title="" href="/single" className="featured">
                        <img src={imagePost} title="" alt=""/>
                    </a>
                    <footer className="grid__infs">
                        <a title="" href="/single" className="category">
                            Technology
                        </a>
                        <h2>
                            <a title="" href="/single">
                                Modern technology essaya our daily life easier and batter
                            </a>
                        </h2>
                        <p>
                            <a title="" href="" className="infs__item"><FaUserEdit />Darlis A. Amorim</a>
                            <a title="" href="" className="infs__item"><FaRegCalendarAlt />September 18, 2022</a>
                            <a title="" href="" className="infs__item"><FaRegComments />0 Comments</a>
                        </p>
                    </footer>

                </article>
                <article className="grid__item">
                    <a title="" href="">
                        <img src={imagePostTest} title="" alt=""/>
                    </a>
                    <footer className="grid__infs">
                        <a title="" href="" className="category">
                            Technology
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
                <article className="grid__item">
                    <a title="" href="">
                        <img src={imagePost} title="" alt=""/>
                    </a>
                    <footer className="grid__infs">
                        <a title="" href="" className="category">
                            Technology
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
                <article className="grid__item">
                    <a title="" href="">
                        <img src={imagePost} title="" alt=""/>
                    </a>
                    <footer className="grid__infs">
                        <a title="" href="" className="category">
                            Technology
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
                <article className="grid__item">
                    <a title="" href="">
                        <img src={imagePost} title="" alt=""/>
                    </a>
                    <footer className="grid__infs">
                        <a title="" href="" className="category">
                            Technology
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
                <article className="grid__item">
                    <a title="" href="">
                        <img src={imagePost} title="" alt=""/>
                    </a>
                    <footer className="grid__infs">
                        <a title="" href="" className="category">
                            Technology
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
                <article className="grid__item">
                    <a title="" href="">
                        <img src={imagePost} title="" alt=""/>
                    </a>
                    <footer className="grid__infs">
                        <a title="" href="" className="category">
                            Technology
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
                <article className="grid__item">
                    <a title="" href="">
                        <img src={imagePost} title="" alt=""/>
                    </a>
                    <footer className="grid__infs">
                        <a title="" href="" className="category">
                            Technology
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
                <article className="grid__item">
                    <a title="" href="">
                        <img src={imagePost} title="" alt=""/>
                    </a>
                    <footer className="grid__infs">
                        <a title="" href="" className="category">
                            Technology
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
                <article className="grid__item">
                    <a title="" href="">
                        <img src={imagePost} title="" alt=""/>
                    </a>
                    <footer className="grid__infs">
                        <a title="" href="" className="category">
                            Technology
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
            <div className="content__flex">
                <figure className="pd__posts">
                    <img src="https://source.unsplash.com/featured?technology" title="" alt=""/>
                </figure>
            </div>
        </section>
    )
}