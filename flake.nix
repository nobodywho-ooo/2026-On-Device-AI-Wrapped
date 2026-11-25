{
  description = "Dev environment for 2026 On-Device AI Wrapped (Astro)";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixpkgs-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, flake-utils }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = import nixpkgs { inherit system; };
      in
      {
        devShells.default = pkgs.mkShell {
          packages = with pkgs; [
            nodejs_22
            git
          ];

          shellHook = ''
            echo "Node $(node --version) | npm $(npm --version)"
            echo "Run 'npm install' (once) and 'npm run dev' to start the dev server."
          '';
        };
      });
}