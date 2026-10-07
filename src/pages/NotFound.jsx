import { motion } from "framer-motion";
import { FiHome } from "react-icons/fi";
import Button from "../components/Button";

export default function NotFound() {
  return (
    <section className="container-x flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
      <motion.p
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="font-display text-8xl font-extrabold text-gradient sm:text-9xl"
      >
        404
      </motion.p>
      <h1 className="mt-4 text-2xl font-extrabold sm:text-3xl">Page introuvable</h1>
      <p className="mt-2 max-w-md">La page que vous cherchez n'existe pas ou a été déplacée.</p>
      <Button to="/" className="mt-8">
        <FiHome /> Retour à l'accueil
      </Button>
    </section>
  );
}
