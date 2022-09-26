// Style Import
import './posts.css'

// Icon's Import
import { FaUserEdit, FaRegCalendarAlt, FaRegComments } from 'react-icons/fa';

// Construct
export function Posts() {

    return (
        <section className="posts container">
            <div className="content grid">
                <h1 className="fz">Titulo section H1</h1>

                <article className="grid__item">
                    <img src="https://source.unsplash.com/random" title="" alt=""/>
                    <footer className="grid__infs">
                        <div>
                            <span>Tecnologia</span>
                        </div>
                        <div>
                            <h2>Titulo article H2</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, nisi.
                            </p>
                        </div>
                        <div>
                            <span><FaUserEdit />Admin</span>
                            <span><FaRegCalendarAlt />Date</span>
                            <span><FaRegComments />Comments</span>
                        </div>
                    </footer>
                </article>
                <article className="grid__item">
                    <img src="https://source.unsplash.com/random" width="80" title="" alt=""/>
                    <footer className="grid__infs">
                        <h2>Titulo article H2</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, nisi.
                        </p>
                    </footer>
                </article>
                <article className="grid__item">
                    <img src="https://source.unsplash.com/random" width="80" title="" alt=""/>
                    <footer className="grid__infs">
                        <h2>Titulo article H2</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, nisi.
                        </p>
                    </footer>
                </article>
                <article className="grid__item">
                    <img src="https://source.unsplash.com/random" width="80" title="" alt=""/>
                    <footer className="grid__infs">
                        <h2>Titulo article H2</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, nisi.
                        </p>
                    </footer>
                </article>
                <article className="grid__item">
                    <img src="https://source.unsplash.com/random" width="80" title="" alt=""/>
                    <footer className="grid__infs">
                        <h2>Titulo article H2</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, nisi.
                        </p>
                    </footer>
                </article>
                <article className="grid__item">
                    <img src="https://source.unsplash.com/random" width="80" title="" alt=""/>
                    <footer className="grid__infs">
                        <h2>Titulo article H2</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, nisi.
                        </p>
                    </footer>
                </article>
                <article className="grid__item">
                    <img src="https://source.unsplash.com/random" width="80" title="" alt=""/>
                    <footer className="grid__infs">
                        <h2>Titulo article H2</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, nisi.
                        </p>
                    </footer>
                </article>


            </div>
        </section>
    )
}