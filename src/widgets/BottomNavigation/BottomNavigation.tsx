import { HomeIcon, AvatarIcon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import styles from "./BottomNavigation.module.css";
import {TabButton} from "@/shared/ui/TabButton";

export const BottomNavigation = () => {
    const items = [
        { icon: <HomeIcon />, label: "Главная", to: "/" },
        { icon: <AvatarIcon />, label: "Отслеживания", to: "/track" },
        { icon: <HamburgerMenuIcon />, label: "Профиль", to: "/profile" },
    ];

    return (
        <nav className={styles.nav}>
            {items.map(item => (
                <TabButton
                    key={item.to}
                    icon={item.icon}
                    label={item.label}
                    to={item.to}
                />
            ))}
        </nav>
    );
};
