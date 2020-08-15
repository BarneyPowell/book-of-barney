import PrimaryNavigation from '@/molecules/PrimaryNavigation';

export default function Menu({ isDisplayed }) {

    const styles = {
        right: '-50vw',
        transition: 'right 0.5s ease-in-out',
        backdropFilter: 'blur(10px)'
    };

    if (isDisplayed) {
        styles.right = 0;
    }

    return (
        <div
            style={styles}
            className="fixed overflow-hidden w-1/2 max-w-xs top-0 h-screen">
            <PrimaryNavigation />
        </div>
    )
}