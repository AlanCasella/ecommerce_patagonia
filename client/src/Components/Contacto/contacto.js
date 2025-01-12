import React, { useState } from "react";
import "./contacto.css";

const url = "https://ecommerce-patagonia.herokuapp.com";

function Contacto() {
    const [estado, setEstado] = useState({
        name: '',
        email: ''
    })

    function handleInput(e) {
        setEstado({
            ...estado,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className="Contacto-Body">
            <table className="Contacto-Table">
                <tbody>
                    <tr className="Contacto-Tr">
                        <th className="Contacto-Th">DESARROLLADORES</th>
                        <th className="Contacto-Th">CONTACTO</th>
                        <th className="Contacto-Th">UBICACION</th>
                    </tr>
                    <tr>
                        <td className="Contacto-Td">
                            <div className="Contacto-Datos">
                                <div className="Contacto-Renglon">
                                    <img className="Contacto-Icono-Flecha" src={`${url}/images/flecha.png`} alt="img-flecha" />
                                    <span>Alvarez Alejandro David</span>
                                </div>
                            </div>
                        </td>
                        <td className="Contacto-Td">
                            <div className="Contacto-Datos">
                                <div className="Contacto-Renglon">
                                    <img className="Contacto-Icono-Github" src={`${url}/images/github.png`} alt="img-gitHub" />
                                    <span>GitHub: aalvag</span>
                                </div>
                                <div className="Contacto-Renglon">
                                    <img className="Contacto-Icono-Gmail" src={`${url}/images/gmail.png`} alt="img-gmail" />
                                    <span>Gmail: </span>
                                </div>
                                <div className="Contacto-Renglon">
                                    <img className="Contacto-Icono-Facebook" src={`${url}/images/linkedin.png`} alt="img-linkedin" />
                                    <span>Linkedin: </span>
                                </div>
                                <div className="Contacto-Renglon">
                                    <img className="Contacto-Icono-Instagram" src={`${url}/images/instagram.png`} alt="img-instagram" />
                                    <span>Instagram: </span>
                                </div>
                                <div className="Contacto-Renglon">
                                    <img className="Contacto-Icono-Phone" src={`${url}/images/phone.png`} alt="img-whatsapp" />
                                    <span>+54 11 23976209</span>
                                </div>
                            </div></td>
                        <td className="Contacto-Td">
                            <div className="Contacto-Datos">
                                <div className="Contacto-Renglon">
                                    <img className="Contacto-Icono-Lugar" src={`${url}/images/lugar.png`} alt="img-ubicacion" />
                                    <span>Buenos Aires, Argentina</span>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr className="Contacto-Tr">
                        <td className="Contacto-Td">
                            <div className="Contacto-Datos">
                                <div className="Contacto-Renglon">
                                    <img className="Contacto-Icono-Flecha" src={`${url}/images/flecha.png`} alt="img-flecha" />
                                    <span>Casella Alan Daniel</span>
                                </div>
                            </div>
                        </td>
                        <td className="Contacto-Td">
                            <div className="Contacto-Datos">
                                <div className="Contacto-Renglon">
                                    <img className="Contacto-Icono-Github" src={`${url}/images/github.png`} alt="img-github" />
                                    <span>GitHub: AlanCasella</span>
                                </div>
                                <div className="Contacto-Renglon">
                                    <img className="Contacto-Icono-Gmail" src={`${url}/images/gmail.png`} alt="img-gmail" />
                                    <span>Gmail: </span>
                                </div>
                                <div className="Contacto-Renglon">
                                    <img className="Contacto-Icono-Facebook" src={`${url}/images/linkedin.png`} alt="img-linkedin" />
                                    <span>Linkedin: </span>
                                </div>
                                <div className="Contacto-Renglon">
                                    <img className="Contacto-Icono-Instagram" src={`${url}/images/instagram.png`} alt="img-instagram" />
                                    <span>Instagram: </span>
                                </div>
                                <div className="Contacto-Renglon">
                                    <img className="Contacto-Icono-Phone" src={`${url}/images/phone.png`} alt="img-whatsapp" />
                                    <span>+54 11 40912932</span>
                                </div>
                            </div>
                        </td>
                        <td className="Contacto-Td">
                            <div className="Contacto-Datos">
                                <div className="Contacto-Renglon">
                                    <img className="Contacto-Icono-Lugar" src={`${url}/images/lugar.png`} alt="img-ubiacion" />
                                    <span>CABA, Argentina</span>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className="Contacto-Td">
                            <div className="Contacto-Datos">
                                <div className="Contacto-Renglon">
                                    <img className="Contacto-Icono-Flecha" src={`${url}/images/flecha.png`} alt="img-flecha" />
                                    <span>Nieto Daniel Ignacio</span>
                                </div>
                            </div>
                        </td>
                        <td className="Contacto-Td">
                            <div className="Contacto-Datos">
                                <div className="Contacto-Renglon">
                                    <img className="Contacto-Icono-Github" src={`${url}/images/github.png`} alt="img-github" />
                                    <span>GitHub: Daniel-Ignacio-Nieto</span>
                                </div>
                                <div className="Contacto-Renglon">
                                    <img className="Contacto-Icono-Gmail" src={`${url}/images/gmail.png`} alt="img-gmail" />
                                    <span>Gmail: </span>
                                </div>
                                <div className="Contacto-Renglon">
                                    <img className="Contacto-Icono-Facebook" src={`${url}/images/linkedin.png`} alt="img-linkedin" />
                                    <span>Linkedin: </span>
                                </div>
                                <div className="Contacto-Renglon">
                                    <img className="Contacto-Icono-Instagram" src={`${url}/images/instagram.png`} alt="img-instagram" />
                                    <span>Instagram: </span>
                                </div>
                                <div className="Contacto-Renglon">
                                    <img className="Contacto-Icono-Phone" src={`${url}/images/phone.png`} alt="img-whatsapp" />
                                    <span>+54 351 5918511</span>
                                </div>
                            </div>
                        </td>
                        <td className="Contacto-Td">
                            <div className="Contacto-Datos">
                                <div className="Contacto-Renglon">
                                    <img className="Contacto-Icono-Lugar" src={`${url}/images/lugar.png`} alt="img-ubiacion" />
                                    <span>Córdoba, Argentina</span>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className="Contacto-Td">
                            <div className="Contacto-Datos">
                                <div className="Contacto-Renglon">
                                    <img className="Contacto-Icono-Flecha" src={`${url}/images/flecha.png`} alt="img-flecha" />
                                    <span>Salazar Eliezer</span>
                                </div>
                            </div>
                        </td>
                        <td className="Contacto-Td">
                            <div className="Contacto-Datos">
                                <div className="Contacto-Renglon">
                                    <img className="Contacto-Icono-Github" src={`${url}/images/github.png`} alt="img-github" />
                                    <span>GitHub: babinobass</span>
                                </div>
                                <div className="Contacto-Renglon">
                                    <img className="Contacto-Icono-Gmail" src={`${url}/images/gmail.png`} alt="img-gmail" />
                                    <span>Gmail: </span>
                                </div>
                                <div className="Contacto-Renglon">
                                    <img className="Contacto-Icono-Facebook" src={`${url}/images/linkedin.png`} alt="img-linkedin" />
                                    <span>Linkedin: </span>
                                </div>
                                <div className="Contacto-Renglon">
                                    <img className="Contacto-Icono-Instagram" src={`${url}/images/instagram.png`} alt="img-instagram" />
                                    <span>Instagram: </span>
                                </div>
                                <div className="Contacto-Renglon">
                                    <img className="Contacto-Icono-Phone" src={`${url}/images/phone.png`} alt="img-whatsapp" />
                                    <span>+54 311 27656812</span>
                                </div>
                            </div>
                        </td>
                        <td className="Contacto-Td">
                            <div className="Contacto-Datos">
                                <div className="Contacto-Renglon">
                                    <img className="Contacto-Icono-Lugar" src={`${url}/images/lugar.png`} alt="img-ubiacion" />
                                    <span>Buenos Aires, Argentina</span>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className="Contacto-Td">
                            <div className="Contacto-Datos">
                                <div className="Contacto-Renglon">
                                    <img className="Contacto-Icono-Flecha" src={`${url}/images/flecha.png`} alt="img-flecha" />
                                    <span>Spagnuolo Ricardo Marcelo</span>
                                </div>
                            </div>
                        </td>
                        <td className="Contacto-Td">
                            <div className="Contacto-Datos">
                                <div className="Contacto-Renglon">
                                    <img className="Contacto-Icono-Github" src={`${url}/images/github.png`} alt="img-github" />
                                    <span>GitHub: MarceloSpagnuolo</span>
                                </div>
                                <div className="Contacto-Renglon">
                                    <img className="Contacto-Icono-Gmail" src={`${url}/images/gmail.png`} alt="img-gmail" />
                                    <span>Gmail: lu4huf@gmail.com</span>
                                </div>
                                <div className="Contacto-Renglon">
                                    <img className="Contacto-Icono-Facebook" src={`${url}/images/linkedin.png`} alt="img-linkedin" />
                                    <span>Linkedin: Marcelo Spagnuolo</span>
                                </div>
                                <div className="Contacto-Renglon">
                                    <img className="Contacto-Icono-Instagram" src={`${url}/images/instagram.png`} alt="img-instagram" />
                                    <span>Instagram: marcelospagnuolo</span>
                                </div>
                                <div className="Contacto-Renglon">
                                    <img className="Contacto-Icono-Phone" src={`${url}/images/phone.png`} alt="img-whatsapp" />
                                    <span>+54 351 6185440</span>
                                </div>
                            </div>
                        </td>
                        <td className="Contacto-Td">
                            <div className="Contacto-Datos">
                                <div className="Contacto-Renglon">
                                    <img className="Contacto-Icono-Lugar" src={`${url}/images/lugar.png`} alt="img-flecha" />
                                    <span>Leones, Córdoba, Argentina</span>
                                </div>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div className="Contacto-Body-Form">
                <div className="Contacto-Imagen">
                    <img src={`${url}/images/logocp.png`} alt="img-logocp" />
                </div>
                <form autoComplete="off">
                    <div className="Contacto-Form">
                        <div>
                            <label htmlFor="name">Su Nombre</label><br></br>
                            <input className="Contacto-Input" size={20} type="text" autoFocus="True" name="name" onChange={(e) => handleInput(e)} />
                        </div>
                        <div>
                            <label htmlFor="email">Su Email</label><br></br>
                            <input className="Contacto-Input" size={20} type="email" name="email" onChange={(e) => handleInput(e)} />
                        </div>
                        <div>
                            <label htmlFor="phone">Su Teléfono</label><br></br>
                            <input className="Contacto-Input" size={12} type="tel" name="phone" onChange={(e) => handleInput(e)} />
                        </div>
                    </div>
                    <div className="Contacto-Form">
                        <div>
                            <label htmlFor="asunto">Asunto</label><br></br>
                            <input size={57} className="Contacto-Input" type="text" name="asunto" onChange={(e) => handleInput(e)} />
                        </div>
                    </div>
                    <div className="Contacto-Form">
                        <div>
                            <label htmlFor="mensaje">Su Mensaje</label><br></br>
                            <textarea rows={10} cols={58} className="Contacto-Input" name="mensaje" onChange={(e) => handleInput(e)} />
                        </div>
                    </div>
                    <div className="Contacto-Botones">
                        <div>
                            <button>Restablecer</button>
                            <button>Enviar</button>
                        </div>
                    </div>
                </form>
                <div className="Contacto-Imagen">
                    <img src={`${url}/images/logocp.png`} alt="img-logocp" />
                </div>
            </div>
        </div>
    )
}

export default Contacto;