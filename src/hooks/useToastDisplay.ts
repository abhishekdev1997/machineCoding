import { useEffect, useState } from "react";
import { useMyContext } from ".";

const useToastDisplay = () => {
    const context: any = useMyContext();
    const [displayName, setDisplayName] = useState('');
    const [visible, setVisible] = useState(false);
    const [timer, setTimer] = useState(null);

    useEffect(() => {
        const { screenName, isVisible } = context as any;

        if (isVisible) {
            setDisplayName(screenName);
            setVisible(true);

            if (timer) {
                clearTimeout(timer); // Clear previous timer if it exists
            }

            const newTimer = setTimeout(() => {
                setVisible(false);
                context.setScreenName({ screenName: '', isVisible: false });
            }, 5000);

            setTimer(newTimer as any);
        }
    }, [context]);

    return {
        displayName,
        visible
    };
}

export default useToastDisplay;