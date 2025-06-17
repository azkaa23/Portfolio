
// blogPosts.js
const blogPosts = [
  {
    id: 1,
    title: "Mengapa Memilih React.js",
    description: "Panduan lengkap tentang React.js, mulai dari konsep dasar hingga pembuatan proyek.",
    date: "Mei 26, 2025",
    image: "/MengenalReact.png",
    tags: ["React.js"],
    featured: true,
    views: 328,
    readTime: "5 min read",
    comments: 4,
    content: {
      intro: "React.js adalah library JavaScript paling populer untuk membangun antarmuka pengguna (UI) yang interaktif dan dinamis. Dikembangkan oleh Facebook, React telah menjadi pilihan utama developer front-end karena:",
      benefits: [
        {
          title: "Komponen yang Dapat Digunakan Kembali",
          description: "Bangun komponen UI sekali dan gunakan berkali-kali"
        },
        {
          title: "Virtual DOM",
          description: "Performa tinggi dengan meminimalkan pembaruan DOM langsung"
        },
        {
          title: "Komunitas Besar",
          description: "Dukungan kuat dari komunitas open-source"
        },
        {
          title: "Fleksibilitas",
          description: "Dapat digunakan dengan berbagai stack teknologi"
        }
      ],
      installation: {
        title: "Instalasi React.js",
        description: "Memulai dengan React sangat mudah. Berikut cara mengatur proyek React baru:",
        steps: [
          {
            step: 1,
            instruction: "npx create-react-app nama-aplikasi-anda"
          },
          {
            step: 2,
            instruction: "cd nama-aplikasi-anda"
          },
          {
            step: 3,
            instruction: "npm start"
          }
        ],
        note: "Ini akan membuat aplikasi React baru dengan semua dependensi yang diperlukan dan menjalankan server development di http://localhost:3000."
      },
      concepts: {
        title: "Konsep Dasar React",
        sections: [
          {
            name: "Komponen",
            description: "Komponen adalah blok bangunan dasar aplikasi React. Ada dua jenis komponen:",
            code: {
              language: "jsx",
              content: `// Komponen Fungsi\nfunction Welcome(props) {\n  return <h1>Hello, {props.name}</h1>;\n}\n\n// Komponen Kelas\nclass Welcome extends React.Component {\n  render() {\n    return <h1>Hello, {this.props.name}</h1>;\n  }\n}`
            }
          },
          {
            name: "State dan Props",
            description: "State: Data internal komponen yang dapat berubah\n\nProps: Data yang diteruskan dari komponen induk ke komponen anak",
            code: {
              language: "jsx",
              content: `class Counter extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = { count: 0 };\n  }\n\n  render() {\n    return (\n      <div>\n        <p>Count: {this.state.count}</p>\n        <button onClick={() => this.setState({ count: this.state.count + 1 })}>\n          Increment\n        </button>\n      </div>\n    );\n  }\n}`
            }
          },
          {
            name: "Hooks (untuk Komponen Fungsi)",
            description: "Hooks memungkinkan Anda menggunakan state dan fitur React lainnya tanpa menulis kelas.",
            code: {
              language: "jsx",
              content: `import { useState } from 'react';\n\nfunction Counter() {\n  const [count, setCount] = useState(0);\n\n  return (\n    <div>\n      <p>Count: {count}</p>\n      <button onClick={() => setCount(count + 1)}>Increment</button>\n    </div>\n  );\n}`
            }
          }
        ]
      },
      exampleProject: {
        title: "Proyek Contoh: Membuat Aplikasi Todo List",
        code: {
          language: "jsx",
          content: `import { useState } from 'react';\n\nfunction TodoApp() {\n  const [todos, setTodos] = useState([]);\n  const [input, setInput] = useState('');\n\n  const addTodo = () => {\n    if (input.trim()) {\n      setTodos([...todos, input]);\n      setInput('');\n    }\n  };\n\n  return (\n    <div>\n      <h1>Todo List</h1>\n      <input\n        type=\"text\"\n        value={input}\n        onChange={(e) => setInput(e.target.value)}\n      />\n      <button onClick={addTodo}>Add Todo</button>\n      <ul>\n        {todos.map((todo, index) => (\n          <li key={index}>{todo}</li>\n        ))}\n      </ul>\n    </div>\n  );\n}`
        }
      },
      tips: {
        title: "Tips untuk Belajar React.js",
        list: [
          "Mulai dengan Dasar JavaScript: Pastikan Anda memahami JavaScript ES6+ sebelum React",
          "Banyak Praktek: Bangun proyek kecil untuk mengasah keterampilan",
          "Pelajari React Router: Untuk navigasi antar halaman",
          "Eksplorasi State Management: Redux atau Context API untuk aplikasi yang lebih kompleks",
          "Ikuti Komunitas: Bergabunglah dengan forum React untuk mendapatkan bantuan"
        ]
      },
      conclusion: {
        title: "Kesimpulan",
        text: "React.js adalah alat yang kuat untuk membangun antarmuka pengguna modern. Dengan komponen yang dapat digunakan kembali, virtual DOM, dan ekosistem yang kaya, React memudahkan pengembangan aplikasi web yang cepat dan skalabel."
      }
    }
  },
  {
    id: 2,
    title: "State dan Props di React JS: Penjelasan Mendalam",
    description: "Pelajari perbedaan, penggunaan, dan contoh praktis State dan Props dalam React JS.",
    date: "Mei 28, 2025",
    image: "/StateProps.png",
    tags: ["React.js"],
    featured: true,
    views: 420,
    readTime: "7 min read",
    comments: 6,
    content: {
      intro: "Dalam React, State dan Props adalah dua konsep penting yang digunakan untuk mengelola data dan interaksi antar komponen. Memahami perbedaan dan penggunaannya akan membantu anda membangun aplikasi React dengan cara yang efisien dan terstruktur.",
      sections: [
        {
          title: "1. Props (Properties)",
          description: "Props adalah cara untuk mengirim data dari parent component ke child component. Props bersifat immutable atau tidak dapat diubah oleh komponen penerima.",
          points: [
            "Immutable: Tidak dapat diubah oleh komponen anak.",
            "Unidirectional Data Flow: Data hanya mengalir dari parent ke child.",
            "Bisa berupa: String, number, array, object, function, atau komponen lainnya."
          ],
          code: {
            language: "jsx",
            content: `// Parent Component\nfunction App() {\n  const user = { name: 'John Doe', age: 25 };\n  return <Profile user={user} greeting='Hello!' />;\n}\n\n// Child Component\nfunction Profile({ user, greeting }) {\n  return (\n    <div>\n      <h1>{greeting}, {user.name}!</h1>\n      <p>Umur: {user.age} tahun</p>\n    </div>\n  );\n}\n\nProfile.defaultProps = {\n  greeting: 'Hai'\n};`
          }
        },
        {
          title: "2. State",
          description: "State adalah data lokal yang bisa berubah seiring waktu. Perubahan pada state akan memicu re-render komponen.",
          points: [
            "Mutable: Dapat diubah menggunakan setState atau useState.",
            "Local Scope: Hanya tersedia di dalam komponen pemilik.",
            "Reactive: Perubahan state menyebabkan re-render."
          ],
          code: {
            language: "jsx",
            content: `// Functional Component\nimport { useState } from 'react';\n\nfunction Counter() {\n  const [count, setCount] = useState(0);\n  return (\n    <div>\n      <p>Count: {count}</p>\n      <button onClick={() => setCount(count + 1)}>Tambah</button>\n    </div>\n  );\n}`
          }
        },
        {
          title: "3. Perbedaan Props vs State",
          description: "Perbedaan mendasar antara Props dan State ditampilkan dalam tabel berikut:",
          table: [
            ["Kriteria", "Props", "State"],
            ["Dapat Diubah?", "❌ Tidak", "✅ Ya"],
            ["Sumber Data", "Dari parent component", "Dari dalam komponen"],
            ["Tujuan", "Komunikasi antar komponen", "Data internal komponen"]
          ]
        },
        {
          title: "4. Kapan Menggunakan Props vs State?",
          description: "",
          points: [
            "Gunakan Props saat data datang dari komponen induk atau tidak berubah.",
            "Gunakan State saat data perlu berubah akibat interaksi atau proses internal."
          ]
        },
        {
          title: "5. Contoh Praktis: Form dengan State dan Props",
          description: "Contoh berikut menunjukkan bagaimana state dan props bekerja bersama dalam sebuah form input.",
          code: {
            language: "jsx",
            content: `import { useState } from 'react';\n\nfunction App() {\n  const [inputText, setInputText] = useState('');\n\n  return (\n    <div>\n      <InputField value={inputText} onChange={(e) => setInputText(e.target.value)} />\n      <DisplayText text={inputText} />\n    </div>\n  );\n}\n\nfunction InputField({ value, onChange }) {\n  return <input type='text' value={value} onChange={onChange} />;\n}\n\nfunction DisplayText({ text }) {\n  return <p>Anda mengetik: {text}</p>;\n}`
          }
        }
      ],
      conclusion: {
        title: "Kesimpulan",
        text: "Props digunakan untuk komunikasi antar komponen dan bersifat read-only, sedangkan state digunakan untuk menyimpan dan mengelola data internal yang bisa berubah. Pemahaman yang kuat terhadap keduanya adalah fondasi penting dalam pengembangan aplikasi React yang efisien dan dinamis."
      }
    }
  }
];

export default blogPosts;
