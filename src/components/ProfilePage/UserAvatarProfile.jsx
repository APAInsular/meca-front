import React, { useState } from "react";

import imagesData from '../../Avatar.json'; // Asegúrate de que la ruta sea correcta según la ubicación de tu archivo JSON


const UserAvatarProfile = () => {
    const [activeTab, setActiveTab] = useState("Piel");
    const [selectedAvatar, setSelectedAvatar] = useState({
        Piel: "/Image/Avatar/Piel/PielClara.png",
        Pelo: false,
        Camisa: false,
        Pantalon: false,
        Zapato: false,
        Accesorio: false
    })

    const menuAvatar = [
        { key: 'piel', label: 'Piel' },
        { key: 'pelo', label: 'Pelo' },
        { key: 'camisa', label: 'Camisa' },
        { key: 'pantalon', label: 'Pantalon' },
        { key: 'zapato', label: 'Zapato' },
        { key: 'accesorios', label: 'Accesorio' },
    ]

    const renderImages = () => {
        const imageElements = [];
        for (const category in imagesData) {
            const subcategories = imagesData[category];
            for (const subcategoryKey in subcategories) {
                const subcategory = subcategories[subcategoryKey];
                if (typeof subcategory === 'object') {
                    // Si la subcategoría es un objeto, hay otra capa de subcategoría
                    for (const subSubcategoryKey in subcategory) {
                        const subSubcategory = subcategory[subSubcategoryKey];

                        const imagePath = `/Image/Avatar/${category}/${subcategoryKey}/${subSubcategoryKey}.png`;
                        const img = {
                            name: subSubcategoryKey,
                            src: imagePath,
                            category: category,
                            subcategory: subcategoryKey
                        };
                        imageElements.push(img);
                    }
                } else {
                    // Si la subcategoría no es un objeto, es una hoja de imagen
                    const imagePath = `/Image/Avatar/${category}/${subcategoryKey}.png`;
                    const img = {
                        name: subcategoryKey,
                        src: imagePath,
                        category: category,
                        subcategory: ''
                    };
                    imageElements.push(img);
                }
            }
        }
        return imageElements;
    };

    const handleSelectImage = (img, category) => {
        setSelectedAvatar({ category: img });
    }

    return (
        <div className="row">
            <div className="col-6">
                <div className="row mt-1">
                    {menuAvatar.map((item) => (
                        <div
                            className="col-2 d-flex justify-content-center fw-semibold"
                            style={{ borderBottom: "2px solid black", cursor: "pointer", fontSize: "15px" }}
                            onClick={() => setActiveTab(`${item.label}`)}
                            key={item.key}
                        >
                            {item.label}
                        </div>
                    ))}
                </div>
                <div className="row mt-2">
                    {
                        renderImages().filter(image => image.category === activeTab).map((img) => {
                            return (
                                <div className="col-4 text-center">
                                    <img src={img.src} alt={img.name}
                                        onClick={() => handleSelectImage(img.src, img.category)}
                                        className="d-felx justify-content-center"
                                        style={{ width: "200px", height: "auto" }} />
                                    {img.name}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className="col-6 d-flex justify-content-center">
                <img src={selectedAvatar.Piel} alt="" style={{ position: "absolute", top: 0, left: 0, width: "500px", height: "auto" }} />
                <img src={selectedAvatar.Pantalon} alt="" style={{ position: "absolute", top: 0, left: 0, width: "500px", height: "auto" }} />
                <img src={selectedAvatar.Camisa} alt="" style={{ position: "absolute", top: 0, left: 0, width: "500px", height: "auto" }} />
                <img src={selectedAvatar.Pelo} alt="" style={{ position: "absolute", top: 0, left: 0, width: "500px", height: "auto" }} />
                <img src={selectedAvatar.Zapato} alt="" style={{ position: "absolute", top: 0, left: 0, width: "500px", height: "auto" }} />
            </div>
        </div>
    )
}

export default UserAvatarProfile