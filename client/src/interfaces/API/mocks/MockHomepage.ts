import { createServer } from "miragejs"

createServer({
  routes() {
    this.get("/api/users", () => [
      { id: "1", name: "Luke" },
      { id: "2", name: "Leia" },
      { id: "3", name: "Anakin" },
    ])
  },
})