import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { Link } from "gatsby"
import "../style.css"

const BrandColor: React.FC<PageProps> = () => {
    return (
        <>
            <header>
                <section>
                    <ul className="main-menu">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/brand-color">Color Scheme</Link></li>
                    </ul>
                </section>
            </header>
            <main>
                <h1>Brand Color</h1>
                <h2>Light Theme</h2>
                <section className="light-theme">
                    <figure className="brand">
                        <div className="swatch"></div>
                        <figcaption>Brand</figcaption>
                    </figure>

                    <figure className="text1">
                        <div className="swatch"></div>
                        <figcaption>Text 1</figcaption>
                    </figure>

                    <figure className="text2">
                        <div className="swatch"></div>
                        <figcaption>Text 2</figcaption>
                    </figure>

                    <figure className="surface1">
                        <div className="swatch"></div>
                        <figcaption>Surface 1</figcaption>
                    </figure>

                    <figure className="surface2">
                        <div className="swatch"></div>
                        <figcaption>Surface 2</figcaption>
                    </figure>

                    <figure className="surface3">
                        <div className="swatch"></div>
                        <figcaption>Surface 3</figcaption>
                    </figure>

                    <figure className="surface4">
                        <div className="swatch"></div>
                        <figcaption>Surface 4</figcaption>
                    </figure>

                    <figure className="shadow">
                        <div className="swatch"></div>
                        <figcaption>Shadow</figcaption>
                    </figure>
                </section>

                <h2>Dark Theme</h2>
                <section className="dark-theme">
                    <figure className="brand">
                        <div className="swatch"></div>
                        <figcaption>Brand</figcaption>
                    </figure>

                    <figure className="text1">
                        <div className="swatch"></div>
                        <figcaption>Text 1</figcaption>
                    </figure>

                    <figure className="text2">
                        <div className="swatch"></div>
                        <figcaption>Text 2</figcaption>
                    </figure>

                    <figure className="surface1">
                        <div className="swatch"></div>
                        <figcaption>Surface 1</figcaption>
                    </figure>

                    <figure className="surface2">
                        <div className="swatch"></div>
                        <figcaption>Surface 2</figcaption>
                    </figure>

                    <figure className="surface3">
                        <div className="swatch"></div>
                        <figcaption>Surface 3</figcaption>
                    </figure>

                    <figure className="surface4">
                        <div className="swatch"></div>
                        <figcaption>Surface 4</figcaption>
                    </figure>

                    <figure className="shadow">
                        <div className="swatch"></div>
                        <figcaption>Shadow</figcaption>
                    </figure>
                </section>

                <h2>Dim Theme</h2>
                <section className="dim-theme">
                    <figure className="brand">
                        <div className="swatch"></div>
                        <figcaption>Brand</figcaption>
                    </figure>

                    <figure className="text1">
                        <div className="swatch"></div>
                        <figcaption>Text 1</figcaption>
                    </figure>

                    <figure className="text2">
                        <div className="swatch"></div>
                        <figcaption>Text 2</figcaption>
                    </figure>

                    <figure className="surface1">
                        <div className="swatch"></div>
                        <figcaption>Surface 1</figcaption>
                    </figure>

                    <figure className="surface2">
                        <div className="swatch"></div>
                        <figcaption>Surface 2</figcaption>
                    </figure>

                    <figure className="surface3">
                        <div className="swatch"></div>
                        <figcaption>Surface 3</figcaption>
                    </figure>

                    <figure className="surface4">
                        <div className="swatch"></div>
                        <figcaption>Surface 4</figcaption>
                    </figure>

                    <figure className="shadow">
                        <div className="swatch"></div>
                        <figcaption>Shadow</figcaption>
                    </figure>
                </section>
            </main>
        </>
    )
}

export default BrandColor

export const Head: HeadFC = () => <title>Brand color picker</title>