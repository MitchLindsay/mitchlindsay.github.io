require "tmpdir"

GITHUB_REPONAME = "MitchLindsay/mitchlindsay.github.io"

desc "Generate and publish website"
task :publish do
  Dir.mktmpdir do |tmp|
    cp_r "./static/.", tmp

    pwd = Dir.pwd
    Dir.chdir tmp

    system "git init"
    system "git add ."
    message = "Site updated at #{Time.now.utc}"
    system "git commit -m #{message.inspect}"
    system "git remote add origin git@github.com:#{GITHUB_REPONAME}.git"
    system "git push origin master --force"

    Dir.chdir pwd
  end
end
