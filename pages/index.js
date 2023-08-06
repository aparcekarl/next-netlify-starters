import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
<script type="text/javascript" src="https://cdn.weglot.com/weglot.min.js"></script>
<script>
    Weglot.initialize({
        api_key: 'wg_574b4528a122ac4c88eaf2fbcca081b39'
    });
</script>
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Subdomain Takeover" />
        <p className="description">
          Get started by editing <code>by: karl aparece</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
