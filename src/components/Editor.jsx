import React, { useState } from "react";
import { motion } from "framer-motion";
import Select from 'react-select';
const options = [
    { value: 'screen1', label: 'Screen 1' },
    { value: 'screen2', label: 'Screen 2' },
    { value: 'screen3', label: 'Screen 3' },
];
const Editor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [size, setSize] = useState({ width: 480, height: 320 });
    const [opacity, setOpacity] = useState(1);
    const [color, setColor] = useState("#0086FF");
    const [selectedOption, setSelectedOption] = useState(null);
    return (
        <section className="editor-section pad-y">
            <div className="container position-relative ">
                <div className="row">
                    <div className="col-lg-3 col-md-3 col-12">
                        <aside className="sidebar">
                            <div className="d-flex gap-3 mb-3">
                                <button className="tab-btn">Layer</button>
                                <button className="tab-btn">Item</button>
                            </div>
                            <Select
                                defaultValue={selectedOption}
                                onChange={setSelectedOption}
                                options={options}
                                className="screen-select"
                            />
                            <hr style={{
                                backgroundColor: "#fff",
                                height: "2px"
                            }} />
                            <ul className="item-list">
                                <li>Rectangle</li>
                                <li>User Interface</li>
                                <li>Image</li>
                            </ul>
                        </aside>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12">
                        <div className="main-canvas">
                            <motion.div
                                className="animated-object"
                                animate={{
                                    x: position.x,
                                    y: position.y,
                                    width: size.width,
                                    height: size.height,
                                    opacity: opacity,
                                }}
                                transition={{ duration: 0.5 }}
                                style={{
                                    backgroundColor: color,
                                    borderRadius: 0,
                                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                                }}
                            />
                            <div className="timeline">
                                <div className="time-marker">00:02</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-12">
                        <aside className="sidebar">
                            <h3>Design</h3>
                            <div className="layout-controls">
                                <div className="control-row">
                                    <label>X</label>
                                    <input
                                        type="number"
                                        value={position.x}
                                        onChange={(e) => setPosition({ ...position, x: Number(e.target.value) })}
                                    />
                                    <label>Y</label>
                                    <input
                                        type="number"
                                        value={position.y}
                                        onChange={(e) => setPosition({ ...position, y: Number(e.target.value) })}
                                    />
                                </div>

                                <div className="control-row">
                                    <label>Width</label>
                                    <input
                                        type="number"
                                        value={size.width}
                                        onChange={(e) => setSize({ ...size, width: Number(e.target.value) })}
                                    />
                                    <label>Height</label>
                                    <input
                                        type="number"
                                        value={size.height}
                                        onChange={(e) => setSize({ ...size, height: Number(e.target.value) })}
                                    />
                                </div>

                                <div className="control-row">
                                    <label>Opacity</label>
                                    <input
                                        type="range"
                                        min="0"
                                        max="1"
                                        step="0.01"
                                        value={opacity}
                                        onChange={(e) => setOpacity(Number(e.target.value))}
                                    />
                                </div>

                                <div className="color-picker">
                                    <label>Fill</label>
                                    <input
                                        type="color"
                                        value={color}
                                        onChange={(e) => setColor(e.target.value)}
                                    />
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>


            </div>
        </section>

    );
};

export default Editor;