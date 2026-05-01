import { Card } from '@/components/ui/card';

interface GalleryImage {
  src: string;
  alt: string;
  caption: string;
}

interface ImageGalleryProps {
  title: string;
  images: GalleryImage[];
}

const ImageGallery = ({ title, images }: ImageGalleryProps) => {
  return (
    <section className="py-16">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">{title}</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow group">
              <div className="relative">
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </div>
              <div className="p-4">
                <p className="text-sm text-muted-foreground">{image.caption}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageGallery;