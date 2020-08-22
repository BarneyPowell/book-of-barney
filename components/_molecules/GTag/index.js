
export default function GTag({ gaTrackingId }) {
    return (
        <>
            <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${gaTrackingId}`}
            />
            <script
            dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gaTrackingId}', {
            page_path: window.location.pathname,
            });
            `,
            }}
            />
        </>
    )
}