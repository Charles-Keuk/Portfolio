import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { FiArrowLeft, FiCalendar, FiClock } from "react-icons/fi";
import { posts } from "../data/content";
import { formatDate } from "./Blog";
import NotFound from "./NotFound";
import CtaBand from "../components/CtaBand";

export default function BlogPost() {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);
  if (!post) return <NotFound />;

  const others = posts.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <>
      <article>
        <div className={`bg-gradient-to-br ${post.gradient} text-white`}>
          <div className="container-x max-w-3xl py-14 sm:py-20">
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-medium text-white/85 hover:text-white">
                <FiArrowLeft /> Retour au blog
              </Link>
              <span className="mt-6 block w-fit rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-brand">
                {post.category}
              </span>
              <h1 className="mt-4 !text-white text-3xl font-extrabold sm:text-4xl">{post.title}</h1>
              <div className="mt-5 flex items-center gap-5 text-sm text-white/85">
                <span className="inline-flex items-center gap-1.5">
                  <FiCalendar /> {formatDate(post.date)}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <FiClock /> {post.readTime}
                </span>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="container-x max-w-3xl py-12">
          <p className="border-l-4 border-brand pl-4 text-lg font-medium leading-relaxed text-fg">{post.excerpt}</p>
          {post.content.map((para, i) => (
            <p key={i} className="mt-6 text-base leading-8">
              {para}
            </p>
          ))}
        </div>
      </article>

      <section className="border-t border-line bg-surface py-14">
        <div className="container-x max-w-3xl">
          <h2 className="text-xl font-bold">À lire aussi</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {others.map((o) => (
              <Link
                key={o.slug}
                to={`/blog/${o.slug}`}
                className="rounded-2xl border border-line bg-card p-5 transition hover:-translate-y-1 hover:border-brand hover:shadow-brand"
              >
                <span className="text-xs font-semibold uppercase tracking-wide text-brand">{o.category}</span>
                <h3 className="mt-2 font-bold leading-snug">{o.title}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
