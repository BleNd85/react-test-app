import React from 'react';
import classes from './MyModal.module.css'

export default function MyModal({children, visible, setVisible}) {
    const rootClass = [classes.MyModal]
    if (visible) {
        rootClass.push(classes.show)
    }
    return (
        <div className={rootClass.join(" ")} onClick={() => setVisible(false)}>
            <div className={classes.MyModalContent} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
}
