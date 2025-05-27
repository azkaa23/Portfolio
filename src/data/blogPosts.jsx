const blogPosts = [
  {
    "id": 1,
    "title": "Mengapa Memilih React.js",
    "description": "Panduan lengkap tentang React.js, mulai dari konsep dasar hingga pembuatan proyek.",
    "date": "Mei 26, 2025",
    "image": "/MengenalReact.png",
    "tags": ["React.js"],
    "featured": true,
    "views": 328,
    "readTime": "5 min read",
    "comments": 4,
    "content": {
      "intro": "React.js adalah library JavaScript paling populer untuk membangun antarmuka pengguna (UI) yang interaktif dan dinamis. Dikembangkan oleh Facebook, React telah menjadi pilihan utama developer front-end karena:",
      "benefits": [
        {
          "title": "Komponen yang Dapat Digunakan Kembali",
          "description": "Bangun komponen UI sekali dan gunakan berkali-kali"
        },
        {
          "title": "Virtual DOM",
          "description": "Performa tinggi dengan meminimalkan pembaruan DOM langsung"
        },
        {
          "title": "Komunitas Besar",
          "description": "Dukungan kuat dari komunitas open-source"
        },
        {
          "title": "Fleksibilitas",
          "description": "Dapat digunakan dengan berbagai stack teknologi"
        }
      ],
      "installation": {
        "title": "Instalasi React.js",
        "description": "Memulai dengan React sangat mudah. Berikut cara mengatur proyek React baru:",
        "steps": [
          {
            "step": 1,
            "instruction": "npx create-react-app nama-aplikasi-anda"
          },
          {
            "step": 2,
            "instruction": "cd nama-aplikasi-anda"
          },
          {
            "step": 3,
            "instruction": "npm start"
          }
        ],
        "note": "Ini akan membuat aplikasi React baru dengan semua dependensi yang diperlukan dan menjalankan server development di http://localhost:3000."
      },
      "concepts": {
        "title": "Konsep Dasar React",
        "sections": [
          {
            "name": "Komponen",
            "description": "Komponen adalah blok bangunan dasar aplikasi React. Ada dua jenis komponen:",
            "code": {
              "language": "jsx",
              "content": "// Komponen Fungsi\nfunction Welcome(props) {\n  return <h1>Hello, {props.name}</h1>;\n}\n\n// Komponen Kelas\nclass Welcome extends React.Component {\n  render() {\n    return <h1>Hello, {this.props.name}</h1>;\n  }\n}"
            }
          },
          {
            "name": "State dan Props",
            "description": "State: Data internal komponen yang dapat berubah\n\nProps: Data yang diteruskan dari komponen induk ke komponen anak",
            "code": {
              "language": "jsx",
              "content": "class Counter extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = { count: 0 };\n  }\n\n  render() {\n    return (\n      <div>\n        <p>Count: {this.state.count}</p>\n        <button onClick={() => this.setState({ count: this.state.count + 1 })}>\n          Increment\n        </button>\n      </div>\n    );\n  }\n}"
            }
          },
          {
            "name": "Hooks (untuk Komponen Fungsi)",
            "description": "Hooks memungkinkan Anda menggunakan state dan fitur React lainnya tanpa menulis kelas.",
            "code": {
              "language": "jsx",
              "content": "import { useState } from 'react';\n\nfunction Counter() {\n  const [count, setCount] = useState(0);\n\n  return (\n    <div>\n      <p>Count: {count}</p>\n      <button onClick={() => setCount(count + 1)}>Increment</button>\n    </div>\n  );\n}"
            }
          }
        ]
      },
      "exampleProject": {
        "title": "Proyek Contoh: Membuat Aplikasi Todo List",
        "code": {
          "language": "jsx",
          "content": "import { useState } from 'react';\n\nfunction TodoApp() {\n  const [todos, setTodos] = useState([]);\n  const [input, setInput] = useState('');\n\n  const addTodo = () => {\n    if (input.trim()) {\n      setTodos([...todos, input]);\n      setInput('');\n    }\n  };\n\n  return (\n    <div>\n      <h1>Todo List</h1>\n      <input\n        type=\"text\"\n        value={input}\n        onChange={(e) => setInput(e.target.value)}\n      />\n      <button onClick={addTodo}>Add Todo</button>\n      <ul>\n        {todos.map((todo, index) => (\n          <li key={index}>{todo}</li>\n        ))}\n      </ul>\n    </div>\n  );\n}"
        }
      },
      "tips": {
        "title": "Tips untuk Belajar React.js",
        "list": [
          "Mulai dengan Dasar JavaScript: Pastikan Anda memahami JavaScript ES6+ sebelum React",
          "Banyak Praktek: Bangun proyek kecil untuk mengasah keterampilan",
          "Pelajari React Router: Untuk navigasi antar halaman",
          "Eksplorasi State Management: Redux atau Context API untuk aplikasi yang lebih kompleks",
          "Ikuti Komunitas: Bergabunglah dengan forum React untuk mendapatkan bantuan"
        ]
      },
      "conclusion": {
        "title": "Kesimpulan",
        "text": "React.js adalah alat yang kuat untuk membangun antarmuka pengguna modern. Dengan komponen yang dapat digunakan kembali, virtual DOM, dan ekosistem yang kaya, React memudahkan pengembangan aplikasi web yang cepat dan skalabel."
      }
    }
  }
  
];

export default blogPosts;
