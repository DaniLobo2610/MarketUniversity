import { ProductGrid } from "@/components/product-grid"
import { BottomNav } from "@/components/bottom-nav"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold text-gray-900">Revista Universitaria</h1>
          <p className="text-gray-600">Catálogo de productos estudiantiles</p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-6">
        <ProductGrid />
      </main>

      <BottomNav />
    </div>
  )
}
