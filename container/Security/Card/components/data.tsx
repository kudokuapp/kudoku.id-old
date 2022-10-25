import {
    faCoffee,
    faCloud,
    faPlane,
    faEye,
    faLock,
    faCircleInfo,
    faClipboard,
    faBuildingColumns,
    faVault,
} from '@fortawesome/free-solid-svg-icons';

const data = [
    {
        faIcon: faCoffee,
        color: 4,
        classTambahan: 'h-fit',
        heading: `Kamu adalah tanggung jawab kami`,
        children: (
            <p className="text-onPrimary text-lg">
                Kami berkomitmen untuk membuat Kudoku secara transparan. Yang dimaksud transparan,
                kami menjunjung tinggi pertanggung jawaban kepada kamu sebagai kustomer Kudoku. Kami
                secara teratur membagikan perjalanan kami membangun Kudoku melalui website kami,
                update mingguan melalui email, Linkedin, serta Twitter Kudoku.
            </p>
        ),
    },
    {
        faIcon: faLock,
        color: 5,
        classTambahan: 'h-full',
        heading: `Enkripsi data yang bisa kamu percayai`,
        children: (
            <p className="text-onPrimary text-lg">
                Semua data yang kamu punya akan di enkripsi menggunakan spesifikasi AES (The
                Advanced Encryption Standard). Walaupun ada hacker (amit-amit), mereka gak akan bisa
                baca data-data kamu.
            </p>
        ),
    },
    {
        faIcon: faCircleInfo,
        color: 6,
        classTambahan: 'h-full',
        heading: `Aplikasi yang menghargai privasi kamu`,
        children: (
            <p className="text-onPrimary text-lg">
                Setiap data yang Kudoku ambil dari kamu (mulai dari cookies, data transaksi, data
                asset kamu, dan data-data lainnya), gak akan pernah bisa dikaitkan sama kamu. Jadi
                jangan khawatir, semua data-data kamu itu kita gak pernah tau kalo itu data kamu,
                walaupun dari pihak Kudoku sendiri.
            </p>
        ),
    },
    {
        faIcon: faClipboard,
        color: 7,
        classTambahan: 'h-full',
        heading: `Legalitas yang jelas`,
        children: (
            <p className="text-onPrimary text-lg">
                Kudoku terdaftar sebagai entitas PT. Kudoku Finansial Indonesia dengan nomor
                registrasi AHU-0215866.AH.01.11. Kami juga terdaftar di KOMINFO sebagai
                Penyelenggara Sistem Elektronik (PSE). Kami juga lagi proses registrasi untuk masuk
                ke grup FinTech Indonesia.
            </p>
        ),
    },
    {
        faIcon: faBuildingColumns,
        color: 8,
        classTambahan: 'h-full',
        heading: `Keamanan login setara bank`,
        children: (
            <p className="text-onPrimary text-lg">
                Kami menggunakan standar Auth0 untuk autorisasi dan autentikasi login kamu. Auth0
                adalah standar autentikasi dan autorisasi yang dipakai di bank-bank besar, institusi
                kesehatan, dan perusahaan publik.
            </p>
        ),
    },
    {
        faIcon: faVault,
        color: 9,
        classTambahan: 'h-fit',
        heading: `Berkomitmen untuk melindungi data kamu`,
        children: (
            <p className="text-onPrimary text-lg">
                Kami sadar bahwa perusahaan teknologi besar pun rawan akan adanya peretas (hacker).
                Maka dari itu, data finansial dan data personal telah kita buat di database yang
                berbeda untuk mengurangi dampak negatif dari peretasan sukses.
            </p>
        ),
    },

    {
        faIcon: faPlane,
        color: 2,
        classTambahan: 'h-fit',
        heading: `Kami tidak menjual atau upsell data kamu ke siapapun`,
        children: (
            <>
                <p className="text-onPrimary text-lg">
                    Aplikasi dan alat-alat keuangan terkenal dengan menjual datamu keorang lain
                    untuk mendapatkan keuntungan. Mereka sering kali bertindak sebagai perantara.
                </p>
                <p className="text-onPrimary text-lg">
                    Kudoku mendapatkan keuntungan ketika kami sudah sukses membuat aplikasi yang
                    membuat kamu berhasil mengelola keuangan kamu. Inilah alasannya kenapa kita
                    menerapkan sistem biaya bulanan (subscription). Kalo ada aplikasi yang bilang
                    mereka “<i>free</i>”, <i>most likely</i> data kamu akan dijual ke orang lain.
                </p>
                <p className="text-onPrimary text-lg">
                    Insentif Kudoku adalah untuk <b>ngebantu kamu</b>, bukan ngebantu perusahaan
                    lain.
                </p>
            </>
        ),
    },
    {
        faIcon: faEye,
        color: 3,
        classTambahan: 'lg:h-fit h-full',
        heading: `Tidak ada satupun dari pihak Kudoku yang bisa akses data finansial kamu`,
        children: (
            <>
                <p className="text-onPrimary text-lg">
                    Jika ada kejadian yang dimana tim Kudoku membutuhkan akses untuk melakukan
                    support (misalnya seperti ngebantuin kamu untuk koneksikan akun finansial kamu),
                    kami gabakal akses akun kamu tanpa izin tertulis yang explisit dari kamu.
                </p>
                <p className="text-onPrimary text-lg">
                    Kami akan <b>selalu</b> minta izin ke kamu.
                </p>
                <p className="text-onPrimary text-lg">
                    Tapi tetap, kami akan jadikan keamanan dan privasi kamu prioritas nomor satu
                    ketika harus melakukan support.{' '}
                </p>
            </>
        ),
    },
    {
        faIcon: faCloud,
        color: 1,
        classTambahan: 'h-fit',
        heading: `Kami gapernah simpen detil bank credential kamu`,
        children: (
            <p className="text-onPrimary text-lg">
                Kami bekerja sama dengan <i>data aggregator</i> atau <i>data provider</i> seperti{' '}
                <b>Brick</b> dan <b>Brankas</b>, yang dimana mereka punya kerjasama bank dan
                pengalaman bertahun-tahun untuk menangani data sensitif.
            </p>
        ),
    },
];

export default data;
